import copy
import json
import os
import sys

def main(input):
  with open(input,'r') as file:
    content = json.load(file)
    extractor = Extractor("_sketches", f"{content['slug']}__{content['id']}", content['files'])
    [rootNode] = [node for node in content['files'] if node['name'] == 'root']
    extractor.extractRoot(rootNode)

def mkdir(path):
  if not os.path.isdir(path):
    os.makedirs(path)

class Extractor:
  def __init__(self, sketches_dir, sketch_name, file_data):
    self._sketches_dir = sketches_dir
    self._sketch_name = sketch_name
    self._file_data = file_data

  def extractRoot(self, node):
    node_cloned = copy.deepcopy(node)
    node_cloned['name'] = self._sketch_name
    self.extractDir(self._sketches_dir, node_cloned)

  def extract(self, parent_dir, node):
    match node['fileType']:
      case 'file':
        self.extractFile(parent_dir, node)
      case 'folder':
        self.extractDir(parent_dir, node)

  def extractDir(self, parent_dir, node):
    path = os.path.join(parent_dir, node['name'])
    mkdir(path)
    child_nodes = [child for child in self._file_data if child['id'] in node['children']]
    for child in child_nodes:
      self.extract(path, child)

  def extractFile(self, parent_dir, node):
    path = os.path.join(parent_dir, node['name'])
    with open(path, 'w') as file:
      file.write(node['content'])

if __name__ == '__main__':
  main(sys.argv[1])
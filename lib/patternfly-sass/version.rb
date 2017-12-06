module Patternfly
  require 'json'
  path = File.join(File.dirname(__FILE__), '../../package.json')
  VERSION = JSON.parse(File.read(path))['version']
end

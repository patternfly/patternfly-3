module Patternfly
  VERSION = begin
    # Retrieve the version number from the package.json
    require 'json'
    path = File.join(File.dirname(__FILE__), '../../package.json')
    JSON.parse(File.read(path))['version']
  end
end

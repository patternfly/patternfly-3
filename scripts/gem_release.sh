#!/bin/bash

# Hardcode the package version
ruby -r ./lib/patternfly-sass/version.rb <<-END
  version = Patternfly::VERSION
  file = File.read('./lib/patternfly-sass/version.rb').sub(/begin(.*?)end/m, "'#{version}'")
  File.open('./lib/patternfly-sass/version.rb', 'w') do |f|
    f.write(file)
  end
END

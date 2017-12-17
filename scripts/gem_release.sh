#!/bin/bash

# Set the API key for rubygems.org
mkdir -p ~/.gem
echo -e "---\n:rubygems_api_key: $RUBYGEMS_TOKEN" > ~/.gem/credentials
chmod 600 ~/.gem/credentials

# Hardcode the package version
ruby -r ./lib/patternfly-sass/version.rb <<-END
  version = Patternfly::VERSION
  file = File.read('./lib/patternfly-sass/version.rb').sub(/begin(.*?)end/m, "'#{version}'")
  File.open('./lib/patternfly-sass/version.rb', 'w') do |f|
    f.write(file)
  end
END

# Build and push the gem
gem build patternfly-sass.gemspec
gem push patternfly-sass-*.gem

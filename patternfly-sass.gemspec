lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'patternfly-sass/version'

Gem::Specification.new do |s|
  s.name     = 'patternfly-sass'
  s.version  = Patternfly::VERSION
  s.authors  = ['Dávid Halász', 'Alex Wood']
  s.email    = 'patternflyui@gmail.com'
  s.summary  = "Red Hat's Patternfly, converted to Sass and ready to drop into Rails"
  s.homepage = 'https://github.com/Patternfly/patternfly'
  s.license  = 'Apache-2.0'

  s.add_runtime_dependency 'sass', '~> 3.4.15'
  s.add_runtime_dependency 'bootstrap-sass', '~> 3.4.0'
  s.add_runtime_dependency 'font-awesome-sass', '~> 4.6.2'

  s.files = [
    'patternfly-sass.gemspec',
    'LICENSE.txt',
    'README.md',
    'CODE_OF_CONDUCT.md',
    'QUICKSTART.md',
    'OPEN_SOURCE_LICENCES.txt',
    Dir.glob('lib/**/*'),
    Dir.glob('dist/sass/**/*'),
    Dir.glob('dist/js/**/*'),
    Dir.glob('dist/fonts/**/*'),
    Dir.glob('dist/img/**/*')
  ].flatten
end

require 'patternfly-sass/version'
module Patternfly
  class << self
    # Inspired by Kaminari
    def load!
      register_compass_extension if compass?

      if rails?
        register_rails_engine
      elsif sprockets?
        register_sprockets
      end

      configure_sass
    end

    # Paths
    def gem_path
      @gem_path ||= File.expand_path '..', File.dirname(__FILE__)
    end

    def stylesheets_path
      File.join assets_path, 'sass'
    end

    def fonts_path
      File.join assets_path, 'fonts'
    end

    def javascripts_path
      File.join assets_path, 'js'
    end

    def images_path
      File.join assets_path, 'img'
    end

    def assets_path
      @assets_path ||= File.join gem_path, 'dist'
    end

    # Environment detection helpers
    def sprockets?
      defined?(::Sprockets)
    end

    def compass?
      defined?(::Compass)
    end

    def rails?
      defined?(::Rails)
    end

    private

    def configure_sass
      require 'sass'

      ::Sass.load_paths << stylesheets_path

      # bootstrap requires minimum precision of 8, see https://github.com/twbs/bootstrap-sass/issues/409
      ::Sass::Script::Number.precision = [8, ::Sass::Script::Number.precision].max
    end

    def register_compass_extension
      ::Compass::Frameworks.register(
          'patternfly',
          :version               => Patternfly::VERSION,
          :path                  => gem_path,
          :stylesheets_directory => stylesheets_path,
          :templates_directory   => File.join(gem_path, 'templates')
      )
    end

    def register_rails_engine
      require 'bootstrap-sass'
      require 'font-awesome-sass'

      require 'patternfly-sass/engine'
    end

    def register_sprockets
      Sprockets.append_path(stylesheets_path)
      Sprockets.append_path(fonts_path)
      Sprockets.append_path(javascripts_path)
      Sprockets.append_path(images_path)
    end
  end
end

Patternfly.load!

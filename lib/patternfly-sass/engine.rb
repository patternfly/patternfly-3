module Patternfly
  module Rails
    class Engine < ::Rails::Engine
      initializer 'patternfly-sass.assets.precompile' do |app|
        %w(fonts img js sass).each do |sub|
          app.config.assets.paths << root.join('dist', sub).to_s
        end
      end
    end
  end
end

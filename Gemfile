source 'https://rubygems.org'

# Flexible static site generator
gem 'nanoc'

# Only loads in development environments
group :development do
  # A Dead Simple Fileserver (with live-reloading!)
  gem 'adsf-live'

  # Re-runs commands on filesystem changes
  gem 'rerun'

  # This brings us true live-reloading with this command:
  # bundle exec rerun -xb nanoc | bundle exec nanoc view -L
end

# Only loads in production environments, e.g. Heroku or Travis, or manually set
# via `RACK_ENV=production bundle install`.
group :production do
  # A Dead Simple Fileserver
  gem 'adsf'

  # We here would just run:
  # bundle exec nanoc
  # bundle exec nanoc view
end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

# General configuration

###
# Helpers
###

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

# Build-specific configuration
configure :build do
  # Minify CSS on build
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript
end

activate :sprockets

activate :search do |search|
  search.resources = ['index.html', 'notes/', 'interactive/']
  search.index_path = 'index.json'
  search.fields = {
    title:   {boost: 100, store: true, required: true},
    content: {boost: 50},
    url:     {index: false, store: true}
  }
end

data.information.each do |category|
	category.sections.each do |sec|
		filename = sec['name'].to_s.tr(" ", "_")
		proxy "/notes/#{filename}.html", "/notes/nuclear.html", :locals => {:section_name => filename}
	end
end

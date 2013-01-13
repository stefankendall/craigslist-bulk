require_relative('craigslist_xml_builder')
require 'net/http'

password = ARGV[0]
if not password
  puts 'Password required as first argument'
  exit
end

xml = CraigslistXmlBuilder.new.with_password(password).build()

validation_url = 'https://post.craigslist.org/bulk-rss/validate'

uri = URI.parse(validation_url)
req = Net::HTTP::Post.new(uri.path)
req.add_field('Content-Type', 'application/x-www-form-urlencoded')
req.body = xml

res = Net::HTTP.start(uri.hostname, uri.port) do |http|
  http.request(req)
end

case res
  when Net::HTTPSuccess, Net::HTTPRedirection
    puts 'success'
  else
    res.value
end


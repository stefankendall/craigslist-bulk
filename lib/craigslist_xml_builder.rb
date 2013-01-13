class CraigslistXmlBuilder
  def initialize
    @xml = File.read('template.xml')
  end

  def with_password password
    @xml.gsub! /password=""/, "password=\"#{password}\"/"
    self
  end

  def build
    @xml
  end
end
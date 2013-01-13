require 'spec_helper'
require 'craigslist_xml_builder'

describe CraigslistXmlBuilder do
  it "should parameterize passwords" do
    c = CraigslistXmlBuilder.new
    c.with_password("1234").build().should include "1234"
  end
end

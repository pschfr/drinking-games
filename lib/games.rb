# This takes in each 'game' and adds link tags and attributes.
module GameHelper
  # Takes in each game
  def list_to_links(item)
    # Replace each <li> with <li><a href...
    # and each </li> with </a></li>
    item.gsub('<li>', '<li data-counter="0"><a href="javascript:void(0)" onclick="drink(this)">').gsub('</li>', '</a></li>')
  end
end

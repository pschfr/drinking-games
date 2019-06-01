# Enables partials by activating built-in rendering helper
use_helper Nanoc::Helpers::Rendering

# Enables blogging functionality
use_helper Nanoc::Helpers::Blogging

# Enables Rails-like link_to helper
use_helper Nanoc::Helpers::LinkTo

# Enables my custom DateTime helper
use_helper DateHelper

# Enables my helper for adding functionality to individual games
use_helper GameHelper

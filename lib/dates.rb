# This helps with formatting dates to a human-readable string.
module DateHelper
  # Formats dates
  def pretty_date(date)
    date.strftime('%B %-d, %Y')
  end
end

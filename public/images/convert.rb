#!/usr/bin/ruby


output = ""

input = `ls bathroom`

input.split.each do |item|
  next if item == '.' or item == '..'
  if item.include? "small"
    output << "small:'" + item + "'},"
  else
    output << "{reg:'" + item + "',"
  end
end

puts output

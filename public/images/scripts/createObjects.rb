#!/usr/bin/ruby


ARGC = ARGV.size

if ARGC != 2
  puts "usage: ./createObject.rb folder_of_objects output_file" 
  exit
end

pwd = Dir.pwd

Dir.chdir(ARGV[0])

output = ""

input = `ls`

input.split.each do |item|
  next if item == '.' or item == '..'
  if item.include? "small"
    output << "      'thumbUrl':'" + item + "'\n    },\n"
  else
    output << "    {\n      'url':'public/images/midiController/" + item + "',\n"
  end
end

Dir.chdir(pwd)

f = File.new(ARGV[1],  "w+")
f.write(output);
f.close



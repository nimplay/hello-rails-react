puts 'Creating Cheers'
cheerslist = Cheer.create([
                            { greeting: 'Hello React Rails' },
                            { greeting: 'Hi React Rails' },
                            { greeting: 'Hola React Rails' },
                            { greeting: 'Salut React Rails' },
                            { greeting: 'Bonjour React Rails' }
                          ])
puts 'Cheers created'

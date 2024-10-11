import random
 
def word_gen():                                                                 # Voor mijzelf logischere naam gegeven.
    word_list = []
    filepath = "D://Hacklab Python//Woordlijst.txt"                             # Double slash 'escape' toegevoegd vanwege foutmelding op een gegeven moment. Zou hetzelfde moeten doen als jouw 'r' begreep ik.
    with open(filepath, "r") as words:
        for line in words:
            word_list.append(line.strip())
    return random.choice(word_list)

hangman_stages = [
    """
     ________
     |
     |
     |
     |
    /|\\
    """,
    """
     ________
     |      |
     |
     |
     |
    /|\\
    """,
    """
     ________
     |      |
     |     \U0001F641
     |
     |
    /|\\
    """,
    """
     ________
     |      |
     |     \U0001F62E
     |      |
     |
    /|\\
    """,
    """
     ________
     |      |
     |     \U0001F632
     |     /|
     |
    /|\\
    """,
    """
     ________
     |      |
     |     \U0001F628
     |     /|\\
     |
    /|\\
    """,
    """
     ________
     |      |
     |     \U0001F631
     |     /|\\
     |     /
    /|\\
    """,
    """
     ________
     |      |
     |     \U0001F480
     |     /|\\
     |     / \\
    /|\\
    """
]
hangman_win = [
    """
     ________
     |
     |     
     |    \\\U0001F603 /
     |      |
    /|\\    / \\
    """
]

# Global variables omdat ik de functie volgorde en verwijzingen van de ene naar de andere niet onder de knie kreeg.

def global_init():
    global game_word, letter_blanks, letter_guesses, letters_used, word_display, total_moves
    game_word = word_gen().upper()                                                      # Uppercase om problemen te voorkomen en duidelijker te zien in het spel zelf bij het raden.
    letter_blanks = "_" * len(game_word)                                    
    letter_guesses = 7                                                      
    letters_used = set()                                                                # Sets multiple values in a string
    word_display = list(letter_blanks) 
    total_moves = 0                                     

global_init()

print(game_word)                # ONLY FOR TESTING!

print(" - Welkom bij dit galgje spel. Het verborgen woord is al random gekozen. - \n - Surcces! -\n")

def top_game_display():                                                             # Display for HangmAnimation, Word progress, Used letters and Tries remaining.
    print(hangman_stages[7 - letter_guesses])
    print(f"   {' '.join(word_display)}\n")                                         # Display current state of the word.
    print(f" - Reeds gebruikte: [ {', '.join(sorted(letters_used))} ] ")            # Display used letters.
    print(f" - Overige pogingen: [ {letter_guesses} ]\n")                           # Display remaining guesses.

top_game_display()

def restart_game():
    restart = input("Wil je het spel opnieuw starten met een nieuw woord? J/N: ").upper()
    if restart == "J":
        global_init()
        main_game()
    elif restart == "N":
        print("Bedankt voor het spelen!")
    else:
        print("Typ een J om opnieuw te spelen of een N om te stoppen: ")
        restart_game()

def main_game():                                                                    # 
    global letter_guesses, total_moves
    while "_" in word_display and letter_guesses > 0:
        letter_input = input(" - Raad een letter of typ gelijk het volledige woord: ").upper()
        print(" ")
        
        if letter_input == game_word:                                               # Mogelijkheid het woord in zijn geheel te typen.
            break
        
        if not letter_input.isalpha() or len(letter_input) != 1:                    # Alleen alphanumerieke karakters en niet meer dan 1 karakter tegelijk.
            print(" - Gebruik alleen een letter of typ gelijk het volledige woord.")
            continue

        if letter_input in letters_used:                                            # Als de letter al is gebruikt.
            print(" - Deze letter heb je al gebruikt.")
            continue
        
        letters_used.add(letter_input)                                              # Toevoegen van de gebruikte letters.

        if letter_input in game_word:                                               # Als de letter in het woord zit deze op de juiste plek zetten.
            for index, char in enumerate(game_word):                                # ENUMERATE keeps track (count) of the number of iterations in a loop.
                if char == letter_input:
                    word_display[index] = letter_input
                    total_moves += 1
            print(" - Goed geraden!")
        else:                                                                       # Pogingen met 1 omlaag brengen.
            letter_guesses -= 1
            total_moves += 1
            print(" - Probeer het opnieuw!")

        top_game_display()                                                          # Ik wilde deze tonen na elke actie i.p.v. alleen na een verandering.

    # Berichtgeving voor het winnen of verliezen of vroegtijdig het woord te raden. Inclusief het tonen van aantal overgebleven pogingen en wat het woord was.
    if "_" not in word_display:
        print(hangman_win[0])
        print(f" - Gefeliciteerd! Je hebt het woord letter voor letter geraden in {total_moves} zetten en {letter_guesses} pogin(gen) over." + "\n" + "Probeer het nogmaals om het woord vroegtijdig zelf te typen.")
        restart_game()
    elif letter_input == game_word:
        print(hangman_win[0])
        print(f" - Gefeliciteerd! Je hebt het geraden door vroegtijdig het woord zelf te typen in {total_moves} zetten en {letter_guesses} poging(en) over.")
        restart_game()
    else:
        print(f" - Game over! Je hebt alle pogingen opgebruikt.\n Het geheime woord was {game_word}.\n")
        restart_game()

main_game()
restart_game()

############ Interesting code ############
# Replaced by the enumerate function
# index = game_word.find(letter_input)
# word_display = letter_blanks[:index] + letter_input + letter_blanks[index+1:]
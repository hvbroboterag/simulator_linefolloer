Zeilennummer = 0
Spaltennummer = 0

def on_forever():
    global Zeilennummer, Spaltennummer
    if input.button_is_pressed(Button.A):
        Zeilennummer += 1
    if input.button_is_pressed(Button.B):
        Spaltennummer += 1
    led.plot(Zeilennummer, Spaltennummer)
    basic.pause(1000)
    led.unplot(Zeilennummer, Spaltennummer)
    basic.pause(1000)
basic.forever(on_forever)

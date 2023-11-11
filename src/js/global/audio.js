import defaultButtonHoverSound from '../../../snd/ui/buttons/default_button/default_button_hover.ogg';
import defaultButtonClickSound from '../../../snd/ui/buttons/default_button/default_button_click.ogg';
import checkboxClickSound from '../../../snd/ui/forms/checkbox_click.ogg';

function playSound(file) {
    if (window.appSettings.audio.enableAudio) {
        const audioElement = new Audio(file);
        const audioPlaying = audioElement.play();

        if (audioPlaying !== undefined) {
            audioPlaying.then(_ => {}).catch(error => {});
        }

        audioElement.addEventListener('ended', function() {
            this.remove();
        });
    }
}

export { playSound, defaultButtonHoverSound, defaultButtonClickSound, checkboxClickSound }
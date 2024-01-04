import defaultButtonHoverSound from '../../../snd/ui/buttons/default_button/default_button_hover.ogg';
import defaultButtonClickSound from '../../../snd/ui/buttons/default_button/default_button_click.ogg';
import playButtonClickSound from '../../../snd/containers/client_content/menu/playbutton/playbutton_click.ogg';
import playButtonHoverSound from '../../../snd/containers/client_content/menu/playbutton/playbutton_hover.ogg';
import checkboxClickSound from '../../../snd/ui/forms/checkbox_click.ogg';

function playSound(file, loop = false) {
    if (window.appSettings.audio.enableAudio) {
        const audioElement = new Audio(file);
        audioElement.volume = window.appSettings.audio.audioGlobalVolume / 100;

        const audioPlaying = audioElement.play();

        if (audioPlaying !== undefined) {
            audioPlaying.then(_ => {}).catch(error => {});
        }

        if (loop) {
            audioElement.addEventListener('ended', function() {
                audioElement.src = file;
                audioElement.pause();
                audioElement.src = file;
            });
        } else {
            audioElement.addEventListener('ended', function() {
                this.remove();
            });
        }

        return audioElement;
    }
}

export {
    playSound, defaultButtonHoverSound, defaultButtonClickSound, checkboxClickSound, playButtonClickSound,
    playButtonHoverSound
}
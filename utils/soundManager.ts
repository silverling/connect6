/**
 * Sound Manager for Connect-6 Game
 * Handles all game sound effects
 */

class SoundManager {
  private enabled: boolean = true;
  private volume: number = 0.5; // Default volume 50%

  // Preload audio files
  private sounds: { [key: string]: HTMLAudioElement } = {};

  constructor() {
    this.loadSounds();
  }

  private loadSounds() {
    try {
      // Load win sound
      this.sounds.win = new Audio('/resources/win.WAV');
      this.sounds.win.volume = this.volume;

      // Load fail sound
      this.sounds.fail = new Audio('/resources/fail.WAV');
      this.sounds.fail.volume = this.volume;

      // Load chess placement sounds (3 variations)
      this.sounds.chess1 = new Audio('/resources/chess1.WAV');
      this.sounds.chess1.volume = this.volume;

      this.sounds.chess2 = new Audio('/resources/chess2.WAV');
      this.sounds.chess2.volume = this.volume;

      this.sounds.chess3 = new Audio('/resources/chess3.WAV');
      this.sounds.chess3.volume = this.volume;

      console.log('[SoundManager] Sounds loaded. Place audio files in public/resources/');
    } catch (error) {
      console.error('[SoundManager] Error loading sounds:', error);
    }
  }

  /**
   * Play a random chess placement sound
   */
  playPlaceStone() {
    if (!this.enabled) return;

    try {
      const randomIndex = Math.floor(Math.random() * 3) + 1;
      const sound = this.sounds[`chess${randomIndex}`];

      if (sound) {
        // Reset sound to start if already playing
        sound.currentTime = 0;
        sound.play().catch(err => {
          console.warn('[SoundManager] Failed to play chess sound:', err);
        });
      }
    } catch (error) {
      console.error('[SoundManager] Error playing chess sound:', error);
    }
  }

  /**
   * Play win sound
   */
  playWin() {
    if (!this.enabled) return;

    try {
      const sound = this.sounds.win;
      if (sound) {
        sound.currentTime = 0;
        sound.play().catch(err => {
          console.warn('[SoundManager] Failed to play win sound:', err);
        });
      }
    } catch (error) {
      console.error('[SoundManager] Error playing win sound:', error);
    }
  }

  /**
   * Play fail/lose sound
   */
  playFail() {
    if (!this.enabled) return;

    try {
      const sound = this.sounds.fail;
      if (sound) {
        sound.currentTime = 0;
        sound.play().catch(err => {
          console.warn('[SoundManager] Failed to play fail sound:', err);
        });
      }
    } catch (error) {
      console.error('[SoundManager] Error playing fail sound:', error);
    }
  }

  /**
   * Set volume for all sounds (0.0 to 1.0)
   */
  setVolume(volume: number) {
    this.volume = Math.max(0, Math.min(1, volume));
    Object.values(this.sounds).forEach(sound => {
      sound.volume = this.volume;
    });
  }

  /**
   * Enable or disable all sounds
   */
  setEnabled(enabled: boolean) {
    this.enabled = enabled;
  }

  /**
   * Get current enabled state
   */
  isEnabled(): boolean {
    return this.enabled;
  }

  /**
   * Get current volume
   */
  getVolume(): number {
    return this.volume;
  }
}

// Export singleton instance
export const soundManager = new SoundManager();

# HOTMESS Audio Jingles

This directory contains audio stingers and jingles for HOTMESS Radio.

## Structure

- `station-id/` - Station identification stingers (6s, 15s, 30s)
- `show-intros/` - Show-specific intro stingers
- `transitions/` - Transition audio between songs
- `bumpers/` - Short bumpers for breaks
- `sfx/` - Sound effects and one-shots

## Naming Convention

- `hotmess-id-6s.mp3` - 6-second station ID
- `hotmess-id-15s.mp3` - 15-second station ID
- `morning-mess-intro.mp3` - Show intro
- `transition-001.mp3` - Generic transition
- `bump-aftercare.mp3` - Aftercare themed bumper

## Audio Specs

- Format: MP3, 320kbps
- Sample Rate: 44.1kHz
- Mono or Stereo depending on content
- Normalized to -14 LUFS for broadcast consistency

## Usage

These files are loaded dynamically by the radio automation system
and can be triggered via the DJ interface or scheduled automatically.
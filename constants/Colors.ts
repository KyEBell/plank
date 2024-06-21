const tintColorLight = '#6C3483'; // Amethyst / Dark Purple
const tintColorDark = '#DAA520'; // Goldenrod Yellow

const buttonColorLight = '#6C3483'; // Amethyst / Dark Purple
const buttonColorDark = '#0074D9'; // Bright Blue

const resetButtonColorLight = '#DAA520'; // Goldenrod Yellow
const resetButtonColorDark = '#FF4136'; // Bright Red

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    buttonBackground: buttonColorLight,
    buttonText: '#FFFFFF',
    buttonDisabled: '#D3D3D3',
    resetButtonBackground: resetButtonColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#0a0a0a', // Very dark background
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    buttonBackground: buttonColorDark,
    buttonText: '#FFFFFF',
    buttonDisabled: '#555555', // Darker gray for disabled state
    resetButtonBackground: resetButtonColorDark,
  },
};

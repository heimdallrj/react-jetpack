type PaletteColor = {
    light: string;
    dark: string;
};
export type ThemeConfig = {
    __prefix: string;
    mode: 'light' | 'dark';
    colors: {
        primary: PaletteColor;
        secondary: PaletteColor;
        error: PaletteColor;
        warning: PaletteColor;
        info: PaletteColor;
        success: PaletteColor;
        background: {
            default: string;
            paper: string;
        };
    };
};
export {};

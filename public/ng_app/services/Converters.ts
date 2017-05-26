/**
 * Provides a set of converters.
 */
export class Converters {
    /**
     * Converts RGB to HEX color.
     * @link http://stackoverflow.com/questions/1740700/how-to-get-hex-color-value-rather-than-rgb-value
     * @author Erick Petrucelli
     * @param rgb - RGB string
     * @returns {string} HEX string
     */
    public static rgbToHex(rgb): string {
        if (/^#[0-9A-F]{6}$/i.test(rgb)) {
            return rgb;
        }

        rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

        function hex(x) {
            return ("0" + parseInt(x).toString(16)).slice(-2);
        }

        return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    }
}

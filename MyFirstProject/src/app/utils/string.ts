export class StringUtils {
  static hasSubstring(original: string, substring: string): boolean {
    return original.toLowerCase().indexOf(substring.toLowerCase()) !== -1;
  }
}

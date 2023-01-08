export default sessionStorage;
declare namespace sessionStorage {
    function set(key: any, value: any): void;
    function get(key: any): string | null;
    function getParsed(key: any): any;
    function remove(key: any): void;
    function clear(): void;
}

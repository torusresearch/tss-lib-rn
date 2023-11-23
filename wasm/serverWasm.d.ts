export = loadWebAssembly;
declare function loadWebAssembly(opts: any): {
    buffer: any;
    memory: any;
    exports: any;
    realloc: (size: any) => void;
    onload: (cb: any) => any;
};
declare namespace loadWebAssembly {
    let supported: boolean;
}

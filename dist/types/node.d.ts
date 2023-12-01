export function batch_size(): number;
export function random_generator(state: string): number;
export function random_generator_free(rng: number): void;
export function threshold_signer(session: string, player_index: number, player_count: number, threshold: number, share: string, pubkey: string): number;
export function threshold_signer_free(signer: number): void;
export function setup(signer: number, rng: number): Promise<any>;
export function precompute(parties: Uint8Array, signer: number, rng: number): Promise<any>;
export function local_sign(msg: string, hash_only: boolean, precompute: any): any;
export function get_r_from_precompute(precompute: any): any;
export function local_verify(msg: string, hash_only: boolean, r: any, sig_frags: any[], pubkey: string): any;
export function sign(counterparties: Uint8Array, msg: string, hash_only: boolean, signer: number, rng: number): Promise<any>;
export function __wbgtest_console_log(args: Array<any>): void;
export function __wbgtest_console_debug(args: Array<any>): void;
export function __wbgtest_console_info(args: Array<any>): void;
export function __wbgtest_console_warn(args: Array<any>): void;
export function __wbgtest_console_error(args: Array<any>): void;
export function __wbindgen_object_drop_ref(arg0: any): void;
export function __wbindgen_cb_drop(arg0: any): boolean;
export function __wbindgen_string_new(arg0: any, arg1: any): number;
export function __wbg_jssendmsg_9558e1e6ccbf0bf6(...args: any[]): any;
export function __wbindgen_string_get(arg0: any, arg1: any): void;
export function __wbg_jsreadmsg_3e2fec56a08697d4(...args: any[]): any;
export function __wbindgen_bigint_from_u64(arg0: any): number;
export function __wbindgen_number_new(arg0: any): number;
export function __wbg_newnoargs_b5b063fc6c2f0376(arg0: any, arg1: any): number;
export function __wbg_call_97ae9d8645dc388b(...args: any[]): any;
export function __wbindgen_object_clone_ref(arg0: any): number;
export function __wbg_self_6d479506f72c6a71(...args: any[]): any;
export function __wbg_window_f2557cc78490aceb(...args: any[]): any;
export function __wbg_globalThis_7f206bda628d5286(...args: any[]): any;
export function __wbg_global_ba75c50d1cf384f4(...args: any[]): any;
export function __wbindgen_is_undefined(arg0: any): boolean;
export function __wbg_forEach_ce1177df15902e0c(arg0: any, arg1: any, arg2: any): void;
export function __wbg_message_fe2af63ccc8985bc(arg0: any): number;
export function __wbg_name_48eda3ae6aa697ca(arg0: any): number;
export function __wbg_call_168da88779e35f61(...args: any[]): any;
export function __wbg_new_9962f939219f1820(arg0: any, arg1: any): number;
export function __wbg_resolve_99fe17964f31ffc0(arg0: any): number;
export function __wbg_then_11f7a54d67b4bfad(arg0: any, arg1: any): number;
export function __wbg_then_cedad20fbbd9418a(arg0: any, arg1: any, arg2: any): number;
export function __wbg_buffer_3f3d764d4747d564(arg0: any): number;
export function __wbg_new_8c3f0052272a457a(arg0: any): number;
export function __wbg_set_83db9690f9353e79(arg0: any, arg1: any, arg2: any): void;
export function __wbg_length_9e1ae1900cb0fbd5(arg0: any): any;
export function __wbindgen_throw(arg0: any, arg1: any): never;
export function __wbindgen_memory(): number;
export function __wbg_new_abda76e883ba8a5f(): number;
export function __wbg_stack_658279fe44541cf6(arg0: any, arg1: any): void;
export function __wbg_error_f851667af71bcfc6(arg0: any, arg1: any): void;
export function __wbg_log_d59c74802fa44fe2(arg0: any, arg1: any): void;
export function __wbg_static_accessor_document_0187e21f53c04a48(): number;
export function __wbg_String_0713d2a3d2b5f6b1(arg0: any, arg1: any): void;
export function __wbg_self_74338d9cb12c5d75(arg0: any): number;
export function __wbindgen_jsval_eq(arg0: any, arg1: any): boolean;
export function __wbg_getElementById_4c39186cc7ced742(arg0: any, arg1: any, arg2: any): number;
export function __wbg_settextcontent_344de5dc2a8e15ca(arg0: any, arg1: any, arg2: any): void;
export function __wbg_textcontent_46a9e23ba5cbd900(arg0: any, arg1: any): void;
export function __wbg_stack_2ac21c4ea9c454f4(arg0: any): number;
export function __wbg_stack_475ccfd121fab8c9(arg0: any, arg1: any): void;
export function __wbindgen_closure_wrapper551(arg0: any, arg1: any, arg2: any): number;
/**
* Runtime test harness support instantiated in JS.
*
* The node.js entry script instantiates a `Context` here which is used to
* drive test execution.
*/
export class WasmBindgenTestContext {
    static __wrap(ptr: any): any;
    __destroy_into_raw(): number;
    ptr: number;
    free(): void;
    /**
    * Inform this context about runtime arguments passed to the test
    * harness.
    *
    * Eventually this will be used to support flags, but for now it's just
    * used to support test filters.
    * @param {any[]} args
    */
    args(args: any[]): void;
    /**
    * Executes a list of tests, returning a promise representing their
    * eventual completion.
    *
    * This is the main entry point for executing tests. All the tests passed
    * in are the JS `Function` object that was plucked off the
    * `WebAssembly.Instance` exports list.
    *
    * The promise returned resolves to either `true` if all tests passed or
    * `false` if at least one test failed.
    * @param {any[]} tests
    * @returns {Promise<any>}
    */
    run(tests: any[]): Promise<any>;
}
export let wasmMod: any;
declare namespace imports {
    import __wbindgen_placeholder__ = module.exports;
    export { __wbindgen_placeholder__ };
}
export function init(): Promise<any>;
declare let wasm: any;
declare namespace module {
    namespace exports {
        export { batch_size, random_generator, random_generator_free, threshold_signer, threshold_signer_free, setup, precompute, local_sign, get_r_from_precompute, local_verify, sign, __wbgtest_console_log, __wbgtest_console_debug, __wbgtest_console_info, __wbgtest_console_warn, __wbgtest_console_error, WasmBindgenTestContext, __wbindgen_object_drop_ref, __wbindgen_cb_drop, __wbindgen_string_new, __wbg_jssendmsg_9558e1e6ccbf0bf6, __wbindgen_string_get, __wbg_jsreadmsg_3e2fec56a08697d4, __wbindgen_bigint_from_u64, __wbindgen_number_new, __wbg_newnoargs_b5b063fc6c2f0376, __wbg_call_97ae9d8645dc388b, __wbindgen_object_clone_ref, __wbg_self_6d479506f72c6a71, __wbg_window_f2557cc78490aceb, __wbg_globalThis_7f206bda628d5286, __wbg_global_ba75c50d1cf384f4, __wbindgen_is_undefined, __wbg_forEach_ce1177df15902e0c, __wbg_message_fe2af63ccc8985bc, __wbg_name_48eda3ae6aa697ca, __wbg_call_168da88779e35f61, __wbg_new_9962f939219f1820, __wbg_resolve_99fe17964f31ffc0, __wbg_then_11f7a54d67b4bfad, __wbg_then_cedad20fbbd9418a, __wbg_buffer_3f3d764d4747d564, __wbg_new_8c3f0052272a457a, __wbg_set_83db9690f9353e79, __wbg_length_9e1ae1900cb0fbd5, __wbindgen_throw, __wbindgen_memory, __wbg_new_abda76e883ba8a5f, __wbg_stack_658279fe44541cf6, __wbg_error_f851667af71bcfc6, __wbg_log_d59c74802fa44fe2, __wbg_static_accessor_document_0187e21f53c04a48, __wbg_String_0713d2a3d2b5f6b1, __wbg_self_74338d9cb12c5d75, __wbindgen_jsval_eq, __wbg_getElementById_4c39186cc7ced742, __wbg_settextcontent_344de5dc2a8e15ca, __wbg_textcontent_46a9e23ba5cbd900, __wbg_stack_2ac21c4ea9c454f4, __wbg_stack_475ccfd121fab8c9, __wbindgen_closure_wrapper551, wasmMod, imports as wasmImports, init, wasm as __wasm };
    }
}
export { imports as wasmImports, wasm as __wasm };

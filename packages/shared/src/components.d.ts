/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ShButton {
    }
    interface ShLoader {
    }
    interface ShWrapper {
    }
}
declare global {
    interface HTMLShButtonElement extends Components.ShButton, HTMLStencilElement {
    }
    var HTMLShButtonElement: {
        prototype: HTMLShButtonElement;
        new (): HTMLShButtonElement;
    };
    interface HTMLShLoaderElement extends Components.ShLoader, HTMLStencilElement {
    }
    var HTMLShLoaderElement: {
        prototype: HTMLShLoaderElement;
        new (): HTMLShLoaderElement;
    };
    interface HTMLShWrapperElement extends Components.ShWrapper, HTMLStencilElement {
    }
    var HTMLShWrapperElement: {
        prototype: HTMLShWrapperElement;
        new (): HTMLShWrapperElement;
    };
    interface HTMLElementTagNameMap {
        "sh-button": HTMLShButtonElement;
        "sh-loader": HTMLShLoaderElement;
        "sh-wrapper": HTMLShWrapperElement;
    }
}
declare namespace LocalJSX {
    interface ShButton {
    }
    interface ShLoader {
    }
    interface ShWrapper {
    }
    interface IntrinsicElements {
        "sh-button": ShButton;
        "sh-loader": ShLoader;
        "sh-wrapper": ShWrapper;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "sh-button": LocalJSX.ShButton & JSXBase.HTMLAttributes<HTMLShButtonElement>;
            "sh-loader": LocalJSX.ShLoader & JSXBase.HTMLAttributes<HTMLShLoaderElement>;
            "sh-wrapper": LocalJSX.ShWrapper & JSXBase.HTMLAttributes<HTMLShWrapperElement>;
        }
    }
}

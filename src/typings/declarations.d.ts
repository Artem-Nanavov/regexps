declare module '*.scss' {
	const content: any;
	export default content;
}

declare const GLOBAL_VARIABLES: any;

declare module '*.svg' {
	const content: any;
	export default content;
}

declare module '*.css' {
  const content: { [className: string]: string; };
  export default content;
}

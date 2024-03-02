/**
 * File containing React components representing each digit of the Nixie Tube Clock.
 *
 * Original idea was to use z-index to render the active digit above the inactive ones.
 * Unfortunately, SVG's do not support z-index; render order of elements is determined solely by the order in the SVG.
 * 
 * The proposed spec for SVG version 2 references stacking context, which is what powers z-index for HTML,
 * but it remains to be seen whether this spec will be released and supported by browsers, and whether
 * control of the stacking context will be made available through z-index styling.
 *
 * Drawback to this approach:
 *  * Image is hardcoded, would prefer loading from a file as that's easier to replace and would make the related components more re-usable.
 *
 * Alternatives considered:
 *  * Use combined SVG file and then have 10 individual SVG files for each digit, position on top of each other (Messy, extra DOM nodes)
 *  * Fork SVGR plugin to allow passing an `id` and load the specific tag as a React component (Difficult, unsure if the use case is common enough for effort)
 *  * Use D3 to draw the SVG and use the `raise` function to move active digit to top (Complex, same drawback of hardcoding the SVG)
 */

export interface NixieDigitGroupProps {
  status: "active" | "inactive";
}

export const ZeroNixieDigitGroup = ({
  status,
}: NixieDigitGroupProps): React.ReactElement => (
  <g id="nixie-0-digit" className={status}>
    <path d="M32 0C23.36 0 15.507 2.284 9.687 6.115 3.869 9.946 0 15.475 0 21.75v46C0 83.483 14.486 96 32 96s32-12.517 32-28.25v-46c0-6.275-3.868-11.804-9.688-15.635C48.493 2.285 40.64 0 32 0Zm0 4c7.928 0 15.075 2.138 20.113 5.455C57.152 12.772 60 17.117 60 21.75v46C60 81.012 47.623 92 32 92S4 81.012 4 67.75v-46c0-4.633 2.848-8.978 7.887-12.295C16.925 6.138 24.072 4 32 4Z" />
  </g>
);

export const OneNixieDigitGroup = ({
  status,
}: NixieDigitGroupProps): React.ReactElement => (
  <g id="nixie-1-digit" className={status}>
    <path d="M32 0a2 2 0 0 0-2 2v92a2 2 0 0 0 2 2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z" />
  </g>
);

export const TwoNixieDigitGroup = ({
  status,
}: NixieDigitGroupProps): React.ReactElement => (
  <g id="nixie-2-digit" className={status}>
    <path d="M32 0c-7.684 0-14.784 1.94-20.291 5.27C6.202 8.6 2.219 13.397 1.23 19.082a2.048 2.048 0 0 0 1.668 2.37 2.048 2.048 0 0 0 2.37-1.669c.736-4.23 3.792-8.124 8.56-11.008C18.597 5.892 25.011 4.095 32 4.095c7.618 0 14.482 2.124 19.32 5.417 4.839 3.292 7.584 7.61 7.584 12.238 0 3.06-1.218 6.101-3.695 8.873l-.002.002L.467 92.641a2.048 2.048 0 0 0 1.537 3.404H61a2.048 2.048 0 0 0 2.049-2.049A2.048 2.048 0 0 0 61 91.95H6.543l51.72-58.597h.003l.07-.08.006-.008a2.048 2.048 0 0 0 .004-.02C61.326 29.867 63 25.87 63 21.75c0-6.254-3.735-11.787-9.375-15.625C47.985 2.287 40.371 0 32 0Z" />
  </g>
);

export const ThreeNixieDigitGroup = ({
  status,
}: NixieDigitGroupProps): React.ReactElement => (
  <g id="nixie-3-digit" className={status}>
    <path d="M32 .049c-7.584 0-14.604 1.892-20.08 5.15-5.476 3.258-9.47 7.949-10.574 13.533a2 2 0 0 0 3.924.778c.829-4.192 3.932-8.04 8.695-10.873C18.728 5.803 25.087 4.049 32 4.049c7.627 0 14.5 2.125 19.348 5.424 4.848 3.299 7.603 7.63 7.603 12.277 0 4.646-2.755 8.978-7.603 12.277-4.848 3.3-9.72 5.424-17.348 5.424-.927-.22-9.703 2.038-9.703 2.038s8.528 2.212 9.703 2.038c11.608.003 25.973 10.976 25.973 24.223 0 13.247-12.365 24.223-27.973 24.223-10.96 0-20.848-5.57-25.385-14.053a2 2 0 1 0-3.527 1.887C8.413 89.763 19.69 95.973 32 95.973c17.5 0 31.973-12.505 31.973-28.223 0-11.841-8.22-21.845-19.754-26.066 3.486-1.046 6.67-2.507 9.379-4.35 5.63-3.832 9.353-9.35 9.353-15.584 0-6.235-3.723-11.752-9.353-15.584C47.968 2.334 40.363.049 32 .049Z" />
  </g>
);

export const FourNixieDigitGroup = ({
  status,
}: NixieDigitGroupProps): React.ReactElement => (
  <g id="nixie-4-digit" className={status}>
    <path d="M40.01 0c-2.637-.012-4.696.746-4.696.746a2 2 0 0 0-1.052.89l-34 59.876A2 2 0 0 0 0 62.5v4.25a2 2 0 0 0 2 2h39V94a2 2 0 0 0 4 0V68.75h16a2 2 0 0 0 0-4H45V3c0-.067-.003-.134-.01-.201 0 0-.11-.6-.328-.969a3.124 3.124 0 0 0-.996-1.01C42.805.268 41.686.008 40.01 0Zm-.694 3.867c.814 0 1.506.205 1.684.26V64.75H4v-1.723L37.285 4.412c.594-.526 1.61-.545 2.031-.545z" />
  </g>
);

export const FiveNixieDigitGroup = ({
  status,
}: NixieDigitGroupProps): React.ReactElement => (
  <g id="nixie-5-digit" className={status}>
    <path d="M2-.002A2.002 2.002 0 0 0-.002 2v39.525c0 1.106.896 2.002 2.002 2.002h30.014c15.592.001 27.957 10.977 27.957 24.223 0 13.246-12.364 24.22-27.971 24.22-11.423 0-21.626-6.04-25.887-15.048a2.002 2.002 0 0 0-3.619 1.71C7.507 89.233 19.17 95.976 32 95.976c17.5 0 31.975-12.506 31.975-28.225 0-15.72-14.474-28.226-31.961-28.227H6c-1.168 0-1.998-.811-1.998-2V6.002c.028-1.058 1.01-1.975 2-2H61a2.002 2.002 0 0 0 0-4.004Z" />
  </g>
);

export const SixNixieDigitGroup = ({
  status,
}: NixieDigitGroupProps): React.ReactElement => (
  <g id="nixie-6-digit" className={status}>
    <path d="M36.488.014a2 2 0 0 0-1.982 1.006L6.76 50.393C2.536 55.165 0 61.174 0 67.75 0 83.485 14.488 96 32 96s32-12.515 32-28.25S49.512 39.5 32 39.5c-6.197 0-12.01 1.573-16.941 4.295L37.994 2.98A2 2 0 0 0 37.23.256a2 2 0 0 0-.742-.242ZM32 43.553c15.596 0 27.947 10.966 27.947 24.197 0 13.23-12.351 24.197-27.947 24.197-15.596 0-27.947-10.966-27.947-24.197 0-13.23 12.351-24.197 27.947-24.197Z" />
  </g>
);

export const SevenNixieDigitGroup = ({
  status,
}: NixieDigitGroupProps): React.ReactElement => (
  <g id="nixie-7-digit" className={status}>
    <path d="M3 0a2 2 0 0 0-2 2 2 2 0 0 0 2 2h55.887L18.18 93.17a2 2 0 0 0 .99 2.65 2 2 0 0 0 2.65-.99l42-92A2 2 0 0 0 62 0Z" />
  </g>
);

export const EightNixieDigitGroup = ({
  status,
}: NixieDigitGroupProps): React.ReactElement => (
  <g id="nixie-8-digit" className={status}>
    <path d="M32 0c-8.371 0-15.985 2.287-21.625 6.125C4.735 9.963 1 15.496 1 21.75s3.735 11.787 9.375 15.625c2.674 1.82 5.796 3.286 9.229 4.33C8.145 45.965 0 55.952 0 67.75 0 83.485 14.488 96 32 96s32-12.515 32-28.25c0-11.798-8.145-21.786-19.604-26.045 3.433-1.044 6.555-2.51 9.229-4.33C59.265 33.537 63 28.004 63 21.75S59.265 9.963 53.625 6.125C47.985 2.287 40.371 0 32 0Zm0 4.096c7.618 0 14.482 2.123 19.32 5.416 4.839 3.292 7.584 7.61 7.584 12.238 0 4.627-2.745 8.946-7.584 12.238-4.838 3.293-11.702 5.416-19.32 5.416s-14.482-2.123-19.32-5.416c-4.839-3.292-7.584-7.61-7.584-12.238 0-4.627 2.745-8.946 7.584-12.238C17.518 6.219 24.382 4.096 32 4.096Zm0 39.457c15.596 0 27.947 10.966 27.947 24.197 0 13.23-12.351 24.197-27.947 24.197-15.596 0-27.947-10.966-27.947-24.197 0-13.23 12.351-24.197 27.947-24.197Z" />
  </g>
);

export const NineNixieDigitGroup = ({
  status,
}: NixieDigitGroupProps): React.ReactElement => (
  <g id="nixie-9-digit" className={status}>
    <path d="M32 .049c-8.363 0-15.967 2.285-21.598 6.117-5.63 3.832-9.353 9.35-9.353 15.584 0 6.235 3.723 11.752 9.353 15.584 5.63 3.832 13.235 6.117 21.598 6.117 3.481 0 6.828-.402 9.959-1.14l-30.67 50.654a2 2 0 0 0 .676 2.746 2 2 0 0 0 2.746-.676l33.043-54.574a32.337 32.337 0 0 0 5.844-3.127c5.63-3.832 9.353-9.35 9.353-15.584 0-6.235-3.723-11.752-9.353-15.584C47.968 2.334 40.363.049 32 .049Zm0 4c7.627 0 14.5 2.125 19.348 5.424 4.848 3.299 7.603 7.63 7.603 12.277 0 4.646-2.755 8.978-7.603 12.277-4.848 3.3-11.72 5.424-19.348 5.424-7.627 0-14.5-2.125-19.348-5.424-4.848-3.299-7.603-7.63-7.603-12.277 0-4.646 2.755-8.978 7.603-12.277C17.5 6.173 24.372 4.049 32 4.049Z" />
  </g>
);

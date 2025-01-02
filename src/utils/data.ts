// export const initialCode = `
// type Props = {
//   label: string;
// }
// const Counter = (props: Props) => {
//   const [count, setCount] =
//     React.useState<number>(0)
//   return (
//     <div>
//       <h3 style={{
//         background: 'darkslateblue',
//         color: 'white',
//         padding: 8,
//         borderRadius: 4
//       }}>
//         {props.label}: {count} 🧮
//       </h3>
//       <button
//         onClick={() =>
//           setCount(c => c + 1)
//         }>
//         Increment
//       </button>
//     </div>
//   )
// }
// render(<Counter label="Counter" />)
// `.trim();

export const initialCode = `
graph TD
    A-->B;
    B-->C;
`.trim();

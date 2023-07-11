import { Colors } from "./colors";

type BoxColorProps = {
  nameColor: string;
  hexadecimal: string;
};

function BoxColor({ nameColor, hexadecimal }: BoxColorProps) {
  return (
    <li style={{ display: "flex" }}>
      <div style={{ width: 50, height: 50, background: hexadecimal }} />
      <div>
        <h6>{nameColor}</h6>
        <p>{hexadecimal}</p>
      </div>
    </li>
  );
}

type PaletteListProps = {
  id: string;
  colors: Partial<Colors>;
  title: string;
};

function PaletteList({ id, colors, title }: PaletteListProps) {
  function groupColorsByPrefix(
    list: Partial<Colors>
  ): Array<Array<Array<string>>> {
    let prefixHelper = "";
    let indexHelper = -1;

    return Object.entries(list).reduce(
      (acc: any[], color: [string, string]) => {
        const [name] = color;
        const x = name.split("-");

        if (x.length > 1) {
          x.pop();
        }

        const prefix = x.join("-");

        if (prefixHelper !== prefix) {
          prefixHelper = prefix;
          indexHelper = indexHelper + 1;
          acc[indexHelper] = [color];
        } else {
          acc[indexHelper].push(color);
        }

        return acc;
      },
      []
    );
  }

  const groups = groupColorsByPrefix(colors);

  return (
    <section id={id}>
      <h3>{title}</h3>
      {groups.map((group) => (
        <ul style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
          {group.map((color) => {
            const [nameColor, hexadecimal] = color;
            return (
              <BoxColor
                key={nameColor}
                nameColor={nameColor}
                hexadecimal={hexadecimal}
              />
            );
          })}
        </ul>
      ))}
    </section>
  );
}

export default PaletteList;

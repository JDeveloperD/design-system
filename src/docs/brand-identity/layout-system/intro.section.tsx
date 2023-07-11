import { PropsWithChildren } from "react";

const spaces = [
  0, 4, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120,
];

type SpaceProps = {
  orientation: "horizontal" | "vertical";
  space: number;
  position: "top" | "bottom" | "left" | "right";
};

function Space({ orientation, space, position }: SpaceProps) {
  const isHorizontal = orientation === "horizontal";
  const isVertical = orientation === "vertical";
  const isSpaceTop = isHorizontal && position === "top";
  const isSpaceBottom = isHorizontal && position === "bottom";
  const isSpaceLeft = isVertical && position === "left";
  const isSpaceRight = isVertical && position === "right";

  return (
    <div
      style={{
        display: "inline-block",
        width: isHorizontal ? "100%" : space,
        height: isVertical ? "100%" : space,
        background: "#E63780",
        opacity: 0.34,
        position: "absolute",
        top: isSpaceTop || isSpaceLeft || isSpaceRight ? 0 : undefined,
        left: isSpaceLeft || isSpaceBottom ? 0 : undefined,
        right: isSpaceRight ? 0 : undefined,
        bottom: isSpaceBottom ? 0 : undefined,
      }}
    />
  );
}

function BoxSpace(props: PropsWithChildren) {
  return (
    <div
      style={{
        width: 120,
        height: 120,
        background: "#F8F8F8",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {props.children}
    </div>
  );
}
function LayoutSystemIntroSection() {
  return (
    <>
      <section>
        <p>
          El Sistema de Diseño de la Interfaz de Usuario Phoenix responde a las
          necesidades de los diseñadores para crear interfaces de usuario
          consistentes y comunicar mejor la identidad de marca de Phoenix. Las
          siguientes pautas ayudarán a los diseñadores a alinear sus diseños y
          mantener una coherencia en todos los puntos de contacto utilizando los
          mismos ejes y métricas. En Phoenix utilizamos la siguiente
          terminología para describir nuestro sistema de diseño de la interfaz
          de usuario.
        </p>
        <ul>
          <li>
            <h4>Área de contenido</h4>
            <p>
              El área de contenido está definida por el tamaño del margen de la
              página, que lo separa de los lados izquierdo y derecho de la
              página.
            </p>
          </li>
          <li>
            <h4>Sistema de espaciado</h4>
            <p>
              Dentro de una región de diseño, puedes colocar elementos
              utilizando el sistema de espaciado para definir las distancias
              entre ellos.
            </p>
          </li>
          <li>
            <h4>Región de diseño</h4>
            <p>
              La mayoría de los componentes se colocan dentro de una región de
              diseño, que generalmente se extiende hasta el ancho completo del
              área de contenido.
            </p>
          </li>
        </ul>
      </section>
      <section>
        <h2>Sistema de espaciado</h2>
        <p>
          El espaciado ayuda a que los componentes de la página respiren. El
          sistema de espaciado de Audi utiliza una serie de espaciadores
          responsivos que se adaptan dinámicamente en diferentes puntos de
          quiebre. Esto permite que la información en la página se adapte a
          cualquier tamaño de pantalla.
        </p>

        <h3>Guía de espaciado</h3>
        <p>
          Son multifuncionales y se pueden utilizar tanto para mediciones
          apiladas (stack) como en línea (inline), o combinarse para crear
          mediciones de inserción (inset).
        </p>
        {/* <h4>Matriz de espaciado</h4> */}
        {spaces.map((space, index) => {
          if (space > 0) {
            return (
              <div key={space} style={{ display: "flex", marginBottom: 12 }}>
                <div style={{ width: 30 }}>{index}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div
                    style={{
                      display: "inline-block",
                      width: space,
                      height: 20,
                      background: "#E63780",
                      opacity: 0.34,
                    }}
                  />
                  {space}px
                </div>
              </div>
            );
          }
          return null;
        })}

        <div style={{ display: "flex", gap: 24, marginBottom: 24 }}>
          <div
            style={{
              width: 120,
              height: 120,
              background: "#F8F8F8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: `${8}px solid rgba(230, 55, 128, 0.35)`,
            }}
          >
            Padding, p
          </div>

          <div
            style={{
              width: 120,
              height: 120,
              background: "#F8F8F8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderTop: `${8}px solid rgba(230, 55, 128, 0.35)`,
              borderBottom: `${8}px solid rgba(230, 55, 128, 0.35)`,
            }}
          >
            PaddingY, py
          </div>
          <div
            style={{
              width: 120,
              height: 120,
              background: "#F8F8F8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderLeft: `${8}px solid rgba(230, 55, 128, 0.35)`,
              borderRight: `${8}px solid rgba(230, 55, 128, 0.35)`,
            }}
          >
            PaddingX, px
          </div>
        </div>

        <div style={{ display: "flex", gap: 24 }}>
          <div
            style={{
              width: 120,
              height: 120,
              background: "#F8F8F8",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 32,
              justifyContent: "center",
              // border: `${8}px solid rgba(230, 55, 128, 0.35)`,
            }}
          >
            <div
              style={{
                width: "100%",
                height: 8,
                background: "rgba(230, 55, 128, 0.35)",
              }}
            ></div>
            <div
              style={{
                width: "100%",
                height: 8,
                background: "rgba(230, 55, 128, 0.35)",
              }}
            ></div>
          </div>

          <div
            style={{
              width: 120,
              height: 120,
              background: "#F8F8F8",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 32,
              justifyContent: "center",
              // border: `${8}px solid rgba(230, 55, 128, 0.35)`,
            }}
          >
            <div
              style={{
                width: "100%",
                height: 16,
                background: "rgba(230, 55, 128, 0.35)",
              }}
            ></div>
            <div
              style={{
                width: "100%",
                height: 16,
                background: "rgba(230, 55, 128, 0.35)",
              }}
            ></div>
          </div>

          <div
            style={{
              width: 120,
              height: 120,
              background: "#F8F8F8",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 32,
              justifyContent: "center",
              // border: `${8}px solid rgba(230, 55, 128, 0.35)`,
            }}
          >
            <div
              style={{
                width: "100%",
                height: 24,
                background: "rgba(230, 55, 128, 0.35)",
              }}
            ></div>
            <div
              style={{
                width: "100%",
                height: 24,
                background: "rgba(230, 55, 128, 0.35)",
              }}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LayoutSystemIntroSection;

const { obtenerEstadoSemaforo } = require("../src/app.js");

describe("Pruebas de obtenerEstadoSemaforo()", () => {
  
  test("Activa correctamente la luz roja", () => {
    const estado = obtenerEstadoSemaforo("red");
    expect(estado.red).toBe("red");
    expect(estado.yellow).toBe("#555");
    expect(estado.green).toBe("#555");
  });

  test("Activa correctamente la luz amarilla", () => {
    const estado = obtenerEstadoSemaforo("yellow");
    expect(estado.yellow).toBe("yellow");
    expect(estado.red).toBe("#555");
    expect(estado.green).toBe("#555");
  });

  test("Activa correctamente la luz verde", () => {
    const estado = obtenerEstadoSemaforo("green");
    expect(estado.green).toBe("green");
  });

  test("Color inválido no rompe la función", () => {
    const estado = obtenerEstadoSemaforo("azul");
    expect(estado.red).toBe("#555");
    expect(estado.yellow).toBe("#555");
    expect(estado.green).toBe("#555");
  });

});

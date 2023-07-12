export default async function fetchData() {
  const data = await fetch("https://www.jsonkeeper.com/b/WBO7")
    .then((res) => res.json())
    .catch((error) => {
      console.log("Error al obtener lugares:", error);
      throw error; // Lanzar el error para que se maneje en otro lugar
    });
  return data;
}

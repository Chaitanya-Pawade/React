export function NewComp() {
  const countries = [
    "India",
    "America",
    "Russia",
    "Chin",
    "Pakistan",
    "England",
    "Australia",
    "Afghanistan",
    "Shrilanka",
    "Nethrland",
    "Newzeland",
    "France",
    "Japan",
    "South Africa",
    "Bangladesh",
  ];

  return (
    <>
      <h2>Dropdown using Map</h2>
      <select>
        <option>Select Country</option>
        {countries.map((country, index) => {
          return (
            <option key={index} value={country}>
              {country}
            </option>
          );
        })}
      </select>
      <br></br>
      datalist :
      
      <input list="countries" />
      <datalist id = "countries">
        
        {countries.map((country, index) => {
          return (
            <option key={index} value={country}>
              
            </option>
          );
        })}
      </datalist>
    </>
  );
}

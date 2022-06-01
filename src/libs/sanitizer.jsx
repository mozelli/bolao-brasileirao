export const cleanTeamImageName = (value) => {
  let result = value.replace(/ /g, "-");
  result = result.replace(/\,/g, "");
  result = result.replace(/\?/g, "");
  result = result.replace(/!/g, "");
  result = result.replace(/\./g, "");
  result = result.replace(/ã/g, "a");
  result = result.replace(/â/g, "a");
  result = result.replace(/á/g, "a");
  result = result.replace(/à/g, "a");
  result = result.replace(/ä/g, "a");
  result = result.replace(/é/g, "e");
  result = result.replace(/ê/g, "e");
  result = result.replace(/í/g, "i");
  result = result.replace(/õ/g, "o");
  result = result.replace(/ô/g, "o");
  result = result.replace(/ú/g, "u");
  result = result.replace(/ç/g, "c");
  result = result.toLowerCase();

  return result;
};
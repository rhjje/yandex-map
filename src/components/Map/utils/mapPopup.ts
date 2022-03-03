interface mapPopupProps {
  title: string;
  description: string[][];
}

export const mapPopup = (data: mapPopupProps) => {
  const body = data.description
    .map((item) => {
      return `<div class="RowPopup">
        <h3 class="NamePopup">${item[0]}</h3>
        <p class="DescriptionPopup">${item[1]}</p>
      </div>`;
    })
    .join("");
  return `<h2 class="SubtitlePopup">${data.title}</h2>${body}`;
};

export function GroupCardsProps(
  isLoading,
  data,
  count,
  error,
  handleCountPage
) {
  this.isLoading = isLoading;
  this.data = data;
  this.error = error;
  this.count = count;
  this.handleCountPage = handleCountPage;
}

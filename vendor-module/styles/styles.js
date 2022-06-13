import { StyleSheet } from "react-native";

const primaryColor = "#58B327";
const secondaryColor = "#466635";
const accentColor = "#A1EA7A";

const styles = StyleSheet.create({
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    width: "100%",
    paddingVertical: 10,
    marginTop: 5,
    backgroundColor: `${primaryColor}`,
    borderRadius: 12,
  },
  buttonSecondary: {
    width: "100%",
    paddingVertical: 10,
    marginTop: 5,
    backgroundColor: `${secondaryColor}`,
    borderRadius: 12,
  },
  banner: {
    width: "100%",
    height: 50,
    borderRadius: 12,
  },
  foodBannerImage: {
    height: 200,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  foodBannerImageText: {
    height: "100%",
    width: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 16,
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  foodItemContainer: {
    borderRadius: 12,
    overflow: "hidden",
    marginTop: 10,
  },
  foodItemImage: {
    width: "100%",
    height: 100,
  },
  foodItemImageContainer: {
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 5,
    justifyContent: "space-between",
  },
  foodItemTitle: {
    backgroundColor: `${accentColor}`,
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
  },
  foodItemButton: {
    backgroundColor: `${secondaryColor}`,
    marginRight: 5,
    padding: 5
  },
  foodItemStar: {
    padding: 5,
    borderRadius: 12,
    backgroundColor: `${primaryColor}`,
    color: "white",
  },
  orderLabel: {
    marginTop: 5,
  },
  orderValue: {
    fontWeight: "bold",
  },
  orderItem: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    padding: 10,
    borderRadius: 12,
    backgroundColor: accentColor,
  },
});

export { primaryColor, secondaryColor, accentColor };
export default styles;

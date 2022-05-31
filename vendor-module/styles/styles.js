import { StyleSheet } from "react-native";

const primaryColor = "#F4A15D";
const secondaryColor = "#756150";
const accentColor = "#F7CBA8";

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
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
  buttonCancel: {
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
    marginTop: 5,
  },
  foodItemImage: {
    width: "100%",
    height: 100,
  },
  foodItemImageContainer: {
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 10,
    justifyContent: "space-between",
  },
  foodItemTitle: {
    backgroundColor: `${accentColor}`,
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
  },
});

export { primaryColor, secondaryColor, accentColor};
export default styles;

import { StyleSheet } from "react-native";

const primaryColor = "#F4A15D";
const secondaryColor = "#756150";
const accentColor = "#F7CBA8";

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
    height: 150,
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
    marginLeft: 5,
    justifyContent: "space-between",
  },
  foodItemTitle: {
    backgroundColor: `${accentColor}`,
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
  },
  foodItemStar: {
    padding: 5,
    borderRadius: 12,
    backgroundColor: `${primaryColor}`,
    color: "white",
  },
  orderLabel: {
    marginTop: 5
  },
  orderValue: {
    fontWeight: "bold"
  },
  orderItem: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    padding: 10,
    borderRadius: 12,
    backgroundColor: accentColor,
  },
  modalBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    height: "80%",
    width: "100%",
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: `${primaryColor}`,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  modalContent: {
    flex: 1,
  },
  modalButtonContainer: {
    padding: 10,
  },
  modalButton: {
    width: "100%",
    padding: 10,
    borderRadius: 12,
    backgroundColor: `${primaryColor}`,
  },
  modalButtonText: {
    fontWeight: "bold",
  },
  hr: {
    borderBottomWidth: 1,
    borderBottomColor: `${primaryColor}`,
  },
});

export { primaryColor, secondaryColor, accentColor};
export default styles;
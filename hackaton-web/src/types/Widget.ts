export default interface Widget {
id:
  string;
content:
  string[];
size:
  "small" | "medium" | "large";
component:
  "title" | "subtitle" | "machine" | "material"
}
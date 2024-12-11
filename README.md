React Bento Box
===============

A React library for creating bento box layouts

Install
-------
```shell
npm install react-bento-box
```

Usage
-----

### BentoBoxContainer
The container that will contain your components. BentoBoxContainer will fill the full width and height of the parent component.

```javascript
import { BentoBoxContainer } from "react-bento-box";

...

<div style={{ width: "100dvw", height: "100dvh" }}>
  <BentoBoxContainer rows={4} cols={6}>
    ...
  </BentoBoxContainer>
</div>

```

```javascript
// parameters
rows: number; // (required) number of rows displayed
cols: number; // (required) number of columns displayed
gap?: "sm" | "md" | "lg" | "xl"; // (optional, default "md") spacing between BentoBoxItems
```

### BentoBoxItem
Must be in a BentoBoxContainer. The individual items that will make up the parts of your bento box. Endless possible layouts.

```javascript
import { BentoBoxItem } from "react-bento-box";

...

// this item will start in row 0 and col 1 and be 1 row in height and 2 cols in width
<BentoBoxItem start={[0, 1]} size={[1, 2]}>
  ...
</BentoBoxItem>

```

```javascript
// parameters
start: number[]; // (required) defined as [row, col] to start the top left element, 0 based index
size: number[]; // (required) defined as [#rows, #cols] to span
shadow?: boolean; // (optional) applies a shadow to the item
shadowColor?: string; // (optional) changes the color of the shadow
```

### CornerButton
Must be in a BentoBoxItem. Useful component for embedded buttons in the BentoBoxItem.

```javascript
import { Corner Button } from "react-bento-box";

...

<CornerButton>
  Click me!
</CornerButton>

```

```javascript
// parameters
gap?: "sm" | "md" | "lg"; // (optional, default "md") size of the button
```

Examples
--------

### Small Layout
```javascript
import { BentoBoxContainer, BentoBoxItem, CornerButton } from "react-bento-box";
import "./App.css";

function App() {
  return (
    <div
      style={{
        width: "100dvw",
        height: "100dvh",
      }}
    >
      <BentoBoxContainer rows={2} cols={3}>
        <BentoBoxItem className="red" start={[0, 0]} size={[1, 2]}>
          <div className="content stack">
            <h4>Start: row=0, col=0</h4>
            <h4>Size: rows=1, cols=2</h4>
          </div>
          <CornerButton size="lg">Corner Button</CornerButton>
        </BentoBoxItem>

        <BentoBoxItem className="pink" start={[0, 2]} size={[1, 1]}>
          <div className="content stack">
            <h4>Start: row=0, col=2</h4>
            <h4>Size: rows=1, cols=1</h4>
          </div>
        </BentoBoxItem>

        <BentoBoxItem className="violet" start={[1, 0]} size={[1, 1]}>
          <div className="content stack">
            <h4>Start: row=1, col=0</h4>
            <h4>Size: rows=1, cols=1</h4>
          </div>
        </BentoBoxItem>

        <BentoBoxItem className="orange" start={[1, 1]} size={[1, 2]}>
          <div className="content stack">
            <h4>Start: row=1, col=1</h4>
            <h4>Size: rows=1, cols=2</h4>
          </div>
        </BentoBoxItem>
      </BentoBoxContainer>
   </div>
  );
}

export default App;
```

### Large Layout
```javascript
import { BentoBoxContainer, BentoBoxItem, CornerButton } from "react-bento-box";
import "./App.css";

function App() {
  return (
    <div
      style={{
        width: "100dvw",
        height: "100dvh",
      }}
    >
      <BentoBoxContainer rows={5} cols={7} gap="lg">
        <BentoBoxItem className="blue" start={[0, 0]} size={[1, 1]} shadow>
          <div className="content">This is content!</div>
        </BentoBoxItem>

        <BentoBoxItem className="blue" start={[0, 1]} size={[1, 1]} shadow>
          <div className="content stack">
            <h4>Title</h4>
            <h1>Stat</h1>
            <h4>Subtitle</h4>
          </div>
        </BentoBoxItem>

        <BentoBoxItem className="blue" start={[0, 2]} size={[1, 1]} shadow>
          <div className="content stack">
            <h4>Title</h4>
            <h1>Stat</h1>
            <h4>Subtitle</h4>
          </div>
        </BentoBoxItem>

        <BentoBoxItem className="blue" start={[0, 3]} size={[1, 2]} shadow>
          <div className="content">
            This is a really long description of content that goes on and on!
          </div>
          <CornerButton size="sm">Link</CornerButton>
        </BentoBoxItem>

        <BentoBoxItem className="blue" start={[0, 5]} size={[1, 2]} shadow>
          <div className="content stack">
            <h4>Title</h4>
            <h1>Big Number</h1>
            <h4>Subtitle</h4>
          </div>
        </BentoBoxItem>

        <BentoBoxItem className="blue" start={[1, 0]} size={[2, 2]} shadow>
          <div className="content stack">
            <h4>Title</h4>
            <h1>Big Number</h1>
            <h4>Subtitle</h4>
          </div>
          <CornerButton>See More!</CornerButton>
        </BentoBoxItem>

        <BentoBoxItem className="blue" start={[3, 0]} size={[1, 1]} shadow>
          <div className="content stack">
            <h4>Title</h4>
            <h1>Stat</h1>
            <h4>Subtitle</h4>
          </div>
        </BentoBoxItem>

        <BentoBoxItem className="blue" start={[3, 1]} size={[1, 1]} shadow>
          <div className="content stack">
            <h4>Title</h4>
            <h1>Stat</h1>
            <h4>Subtitle</h4>
          </div>
        </BentoBoxItem>

        <BentoBoxItem className="blue" start={[1, 2]} size={[3, 3]} shadow>
          <div className="content image">Fake Image</div>
        </BentoBoxItem>

        <BentoBoxItem className="blue" start={[1, 5]} size={[2, 1]} shadow>
          <div className="content stack">
            <h4>Title</h4>
            <h1>Stat</h1>
            <h1>Stat</h1>
            <h4>Subtitle</h4>
          </div>
        </BentoBoxItem>

        <BentoBoxItem className="blue" start={[1, 6]} size={[2, 1]} shadow>
          <div className="content stack">
            <h4>Title</h4>
            <h1>Stat</h1>
            <h1>Stat</h1>
            <h4>Subtitle</h4>
          </div>
        </BentoBoxItem>

        <BentoBoxItem className="blue" start={[3, 5]} size={[2, 2]} shadow>
          <div className="content stack">
            <h4>Title</h4>
            <h1>Big Number</h1>
          </div>
        </BentoBoxItem>

        <BentoBoxItem className="blue" start={[4, 0]} size={[1, 2]} shadow>
          <div className="content ">More content down here!</div>
        </BentoBoxItem>

        <BentoBoxItem className="blue" start={[4, 2]} size={[1, 3]} shadow>
          <div className="content stack">
            <h4>Title</h4>
            <h1>Big Number</h1>
          </div>
        </BentoBoxItem>
      </BentoBoxContainer>
    </div>
  );
}

export default App;
```

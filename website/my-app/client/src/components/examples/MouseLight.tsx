import MouseLight from '../MouseLight';

export default function MouseLightExample() {
  return (
    <div className="h-screen bg-background">
      <MouseLight />
      <div className="p-12">
        <h1 className="text-4xl font-bold mb-4">Move your mouse around</h1>
        <p className="text-muted-foreground">You'll see a subtle light following your cursor</p>
      </div>
    </div>
  );
}

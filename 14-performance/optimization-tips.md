# Performance Optimization Tips

## Best Practices

### 1. Use FlatList for Large Lists
- Avoid ScrollView with many items
- FlatList only renders visible items
- Implement keyExtractor for better performance

### 2. Optimize Re-renders
- Use React.memo() for functional components
- Implement useMemo() and useCallback()
- Avoid inline function definitions

### 3. Image Optimization
- Specify width and height
- Use appropriate image sizes
- Consider using image libraries

### 4. Code Splitting
- Lazy load sections of your app
- Use dynamic imports
- Monitor bundle size

### 5. Memory Management
- Cleanup in useEffect return
- Remove event listeners
- Unsubscribe from streams

## Profiling

Use React DevTools Profiler to identify bottlenecks in your application.

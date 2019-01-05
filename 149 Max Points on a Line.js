// Given n points on a 2D plane, find the maximum number of points that lie on the same straight line.

// Input: [[1,1],[2,2],[3,3]]
// Output: 3
// Explanation:
// ^
// |
// |        o
// |     o
// |  o  
// +------------->
// 0  1  2  3  4

// Input: [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
// Output: 4
// Explanation:
// ^
// |
// |  o
// |     o        o
// |        o
// |  o        o
// +------------------->
// 0  1  2  3  4  5  6

class Solution {
public:
    int maxPoints(vector<Point> &points) {
        int maxPts = 0;
        for(int i=0; i<points.size(); i++) {
            int nMax = 0, nSame = 0, nInf = 0;
            unordered_map<float,int> comSlopes;
            
            for(int j=i+1; j<points.size(); j++) {
                if(points[j].x==points[i].x) {
                    if(points[j].y==points[i].y)
                        nSame++;
                    else
                        nInf++;
                    continue;
                }
                float slope = (float)(points[j].y-points[i].y)/(float)(points[j].x-points[i].x);
                comSlopes[slope]++;
                nMax = max(nMax, comSlopes[slope]);
            }
            
            nMax = max(nMax, nInf)+nSame+1;
            maxPts = max(maxPts,nMax);
        }
        return maxPts;
    }
};

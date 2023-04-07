import numpy as np
import cv2

def dbscan(points, eps, min_pts):
    labels = [0] * len(points)
    cluster = 0

    for p in range(0, len(points)):
        if not (labels[p] == 0):
            continue
        neighbors = region_query(points, p, eps)
        if len(neighbors) < min_pts:
            labels[p] = -1
            continue
        cluster += 1
        grow_cluster(points, labels, p, neighbors, cluster, eps, min_pts)

    return labels

def grow_cluster(points, labels, p, neighbors, cluster, eps, min_pts):
    labels[p] = cluster

    i = 0
    while i < len(neighbors):
        npoint = neighbors[i]
        if labels[npoint] == -1:
            labels[npoint] = cluster
        elif labels[npoint] == 0:
            labels[npoint] = cluster
            np_neighbors = region_query(points, npoint, eps)
            if len(np_neighbors) >= min_pts:
                neighbors = neighbors + np_neighbors
        i += 1

def region_query(points, p, eps):
    neighbors = []
    for i in range(0, len(points)):
        if np.linalg.norm(points[p] - points[i]) < eps:
            neighbors.append(i)
    return neighbors

if __name__ == "__main__":
    # 예제 데이터 생성
    data = np.random.rand(100, 2)
    data[50:60] += 0.5
    data[70:80] += 1

    # DBSCAN 수행
    eps = 0.3
    min_pts = 10
    labels = dbscan(data, eps, min_pts)

    # 시각화
    colors = np.random.rand(len(labels), 3)
    for i, label in enumerate(labels):
        if label == -1:
            color = [0, 0, 0]
        else:
            color = colors[i]
        cv2.circle(img, tuple((data[i] * 500).astype(int)), 5, color, -1)

    cv2.imshow("DBSCAN", img)
    cv2.waitKey(0)
    cv2.destroyAllWindows()
